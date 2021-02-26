export interface ISocialPost {
    userID: number;
    shareMessage: string;
    shareActionViewModel: ISocialPostShareViewModel[];
    stockTicker: string;
}

export interface ISocialPostShareViewModel {
    shareAction: string;
    shareValue: string;
    symbol: string;
}