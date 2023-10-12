interface DevToArticleListItem {
	type_of: string;
	id: number;
	title: string;
	description: string;
	readable_publish_date: string;
	slug: string;
	path: string;
	url: string;
	comments_count: number;
	public_reactions_count: number;
	collection_id: number;
	published_timestamp: string;
	positive_reactions_count: number;
	cover_image: string;
	social_image: string;
	canonical_url: string;
	created_at: string;
	edited_at?: any;
	crossposted_at?: any;
	published_at: string;
	last_comment_at: string;
	reading_time_minutes: number;
	tag_list: string[];
	tags: string;
	user: User;
	flare_tag: Flaretag;
}

interface Flaretag {
	name: string;
	bg_color_hex: string;
	text_color_hex: string;
}

interface User {
	name: string;
	username: string;
	twitter_username?: any;
	github_username: string;
	user_id: number;
	website_url?: any;
	profile_image: string;
	profile_image_90: string;
}

interface GoogleNewsArticleListItem {
	id: string;
	title: string;
	description: string;
	link: string;
	author: undefined;
	published: number;
	created: number;
	category: any[];
	content: undefined;
	enclosures: any[];
	media: Media;
}

interface Media {}
