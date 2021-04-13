import "next-auth";

declare module "next-auth" {
  interface Session {
    activeSubscription: sting; // Or string
  }
}