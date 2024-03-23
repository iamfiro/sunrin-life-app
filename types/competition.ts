/* Represents the state of a competition. */
interface ICompetitionState {
    title: string;
    description: string;
    date: Date;
    url: string;
}

/**
 * Represents the type for the state of a competition.
 * It can be an array of `ICompetitionState` objects or an empty array.
 */
export type CompetitionStateType = ICompetitionState[] | [];