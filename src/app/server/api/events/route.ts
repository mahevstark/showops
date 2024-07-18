
import { NextResponse } from 'next/server';



export async function GET(request) {
    try {

        const response = NextResponse.json(
            {
                message: 'Events fetched successfully', data: {
                    events:[
                        {
                            id:1,
                            owner:"Tourist",
                            event_name:"The Viper Room",
                            image:"event_1.png"
                        },
                        {
                            id:1,
                            owner:"Tourist",
                            event_name:"The Viper Room",
                            image:"event_1.png"
                        },
                        {
                            id:1,
                            owner:"Tourist",
                            event_name:"The Viper Room",
                            image:"event_1.png"
                        }
                    ]
                }
            },
            { status: 200 },
        );
        return response;
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 },
        );
    }
}