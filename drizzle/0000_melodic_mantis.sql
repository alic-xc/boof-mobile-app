CREATE TABLE `legal` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`document_type` text DEFAULT '',
	`content` text NOT NULL,
	`risk_score` integer DEFAULT 0,
	`overallSeverity` text DEFAULT 'medium',
	`overall_rating` integer DEFAULT 0,
	`fairness_score` integer DEFAULT 0,
	`date_created` integer NOT NULL
);
