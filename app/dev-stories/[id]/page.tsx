import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Dev Stories | Bellz Studios",
    description: "Stories behind al the solutions we build",
    openGraph: {
      title: "Dev Stories",
      description: "Stories behind al the solutions we build",
      url: "https://bellzstudios.vercel.app/", // "https://www.bellzstudio.com",  // Replace with your actual site URL
      siteName: "Bellz Studios",
      images: [
        {
          url: "/assets/images/bellzstudio.png",  // Replace with the correct image path
          width: 1200,
          height: 630,
          alt: "ibellzstudio",  // Image description for accessibility
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: "/assets/images/bellzstudio.png",
  },
  }; 
export default async function DevStoryPage({ params }: { params: { id: string } }) {
    

    return (
        <DevStoryPage params={{
            id: params.id
        }} />
    );
}
