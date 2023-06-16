export default interface EventDate {
    confId: string;
    title: string;
    date: Date;
    sequence: number;
    extended: boolean;
    newDate: Date;
    completed: boolean;
    featured: boolean;
}