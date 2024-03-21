interface ICompetitionState {
    title: string;
    description: string;
    date: Date;
    url: string;
}

export type CompetitionStateType = ICompetitionState[] | [];