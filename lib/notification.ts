// lib/notification.ts
import Notification from "@/models/Notification";

export async function createNotification({
  by,
  title,
  forTarget,
  property,
  message,
}: {
  by: string;
  title: string;
  forTarget: string;
  property: string;
  message: string;
}) {
  try {
    const notification = new Notification({
      by,
      title,
      for: forTarget,
      property,
      message,
    });
    await notification.save();
    return { status: true, notification };
  } catch (error) {
    console.error("Error creating notification: ", error);
    return { status: false, error };
  }
}
