import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

const interBold = fetch(
  new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontBold = await interBold;
    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    if (!title) {
      return new Response("No title provided", { status: 500 });
    }
    const heading =
      title.length > 140 ? `${title.substring(0, 140)}...` : title;

    const desc =
      description && description.length > 120
        ? `${description.substring(0, 120)}...`
        : description;

    return new ImageResponse(
      (
        <div tw='flex relative flex-col p-12 w-full h-full items-start text-black bg-white'>
          <div tw='flex items-center'>
            <svg
              version='1.0'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 1018.000000 1280.000000'
              preserveAspectRatio='xMidYMid meet'
            >
              <g
                transform='translate(0.000000,1280.000000) scale(0.100000,-0.100000)'
                fill='#000000'
                stroke='none'
              >
                <path
                  d='M2475 12714 c-1087 -132 -2443 -294 -2460 -294 -13 0 -15 -666 -15
-6210 l0 -6210 108 0 c77 0 553 53 1697 190 875 105 1596 193 1603 195 9 3 12
481 12 2345 l0 2340 1670 0 1670 0 0 -2535 0 -2535 110 0 c61 0 184 9 273 20
570 69 3007 360 3020 360 16 0 17 442 17 6210 l0 6210 -109 0 c-74 0 -322 -26
-772 -80 -1843 -221 -2507 -300 -2522 -300 -16 0 -17 -162 -17 -2210 l0 -2210
-1670 0 -1670 0 0 2400 0 2400 -127 -1 c-93 -1 -316 -24 -818 -85z'
                />
              </g>
            </svg>

            <p tw='ml-2 font-bold text-3xl'>Hen Log</p>
          </div>
          <div tw='flex flex-col flex-1 py-8'>
            <p tw='flex text-2xl uppercase font-bold tracking-tight font-normal'>
              BLOG POST
            </p>
            <h1 tw='flex text-[80px] font-bold text-[50px] mb-6'>{heading}</h1>
            <h2 tw='text-3xl'>{desc}</h2>
          </div>
          <div tw='flex items-center w-full justify-between'>
            <h3 tw='flex text-2xl'>{siteConfig.url}</h3>
            <div tw='flex items-center text-2xl'>
              <svg width='40' height='40' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z'
                  fill='#24292f'
                />
              </svg>
              <h3 tw='flex ml-2'>{siteConfig.links.github}</h3>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
