export interface Feedback {
  id: number;
  authorName: string;
  authorEmail: string;
  content: string;
  category: FeedbackCategory;
}

enum FeedbackCategory {
  PATIENTS = "Patient portal",
  DOCTORS = "Doctors portal",
  REGISTRATION = "Registration",
  VIRTUAL = "Virtual visit",
  OPENKM = "OpenKM",
  MSSHAREPOINT = "Microsoft SharePoint"
}
