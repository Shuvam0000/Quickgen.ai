import { clerkClient } from "@clerk/express";

// Middleware to check userID and plan status
export const auth = async (req, res, next) => {
  try {
    const { userId, has } = req.auth;
    const hasPremiumPlan = await has({ plan: 'premium' });
    
    // Set the plan on the request object
    req.plan = hasPremiumPlan ? 'premium' : 'free';

    // Only handle free_usage logic for non-premium users
    if (!hasPremiumPlan) {
      const user = await clerkClient.users.getUser(userId);
      
      // Safely get the current free_usage, defaulting to 0 if it's not set
      const freeUsage = user.privateMetadata.free_usage || 0;
      
      // If the free_usage metadata has never been set, initialize it to 0.
      // This happens only once for a new user.
      if (user.privateMetadata.free_usage === undefined || user.privateMetadata.free_usage === null) {
          await clerkClient.users.updateUserMetadata(userId, {
              privateMetadata: { free_usage: 0 }
          });
      }
      
      // Attach the current usage count to the request
      req.free_usage = freeUsage;
    }

    next();
  } catch (error) {
    console.error("Authentication Middleware Error:", error); // It's good practice to log the error
    res.status(401).json({
      success: false,
      message: "Authentication error: " + error.message,
    });
  }
};
