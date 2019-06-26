import { longStackSupport } from 'q';

export interface JwtResponseProject {
    message: {
        monetary_goal: number,
        start_date: Date,
        end_date: Date,
        challenges: string,
        link_video: string,
        friends: any,
        collaborators: any,
        percentage: any,
        _id: string,
        title: string,
        short_desc: string,
        category: string,
        ubication: string,
        reward: any,
        long_desc: any,
        sponsors: any,
        __v: number
    }
    status: string
}