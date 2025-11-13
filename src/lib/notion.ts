import { Client } from '@notionhq/client';


const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

export interface Article {
    id: string;
    title: string;
    description?: string;
    category?: string;
    link?: string;
    date?: string;
    color?: string;
}

export async function getArticles(): Promise<Article[]> {
    const response = await notion.dataSources.query({
        data_source_id: process.env.NOTION_DATASOURCE_ID!,
        sorts: [
            {
                property: 'Title', // Adjust to your property name
                direction: 'ascending',
            },
        ],
    });
    console.log(response.results);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.results.map((page: any) => {
        const props = page.properties;

        return {
            id: page.id,
            title: props.Title?.title[0]?.plain_text || 'Untitled',
            description: props.Description?.rich_text[0]?.plain_text || '',
            category: props.Category?.select?.name || '',
            color: props.Color?.select?.name || '',
            link: props.Link?.url || '',
            date: props.Date?.date?.start || '',
            // Map other properties as needed
        };
    });
}