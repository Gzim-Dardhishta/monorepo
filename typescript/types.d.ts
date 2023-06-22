
interface Intens {
    name: string,
    age: number,
    skills: string[]
}

interface Juniors {
    name: string,
    age: number,
    date_of_promotion: Date
    skills: string[]
    domain: Domain.Backend
}

export enum Domain {
    Web,
    Connect,
    Backend
}

interface Company {
    Interns: Intens[]
    Juniors: Juniors[],
    Country: string
}

export default Company
