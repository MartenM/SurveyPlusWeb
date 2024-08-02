interface SurveyResult {
    meta:           SurveyMeta;
    averageTime: number;
    questions:      Question[];
    participants:   number;
}

interface SurveyMeta {
    targetServer: string;
    surveyId:     number;
    name:         string;
    description:  string;
    permission:   boolean;
    type:         string;
    rewards:      string[];
}

interface Question {
    answers: NormalAnswers | OpenAnswers;
    id:      number;
    text:    string;
    type:    string;
}

interface NormalAnswers {
    count:   number;
    options: Option[];
}

interface Option {
    answer:     string;
    votes:      number;
    percentage: number;
}

interface OpenAnswers {
    pairs:   number;
    data: OpenAnswerResponse[];
}

 interface OpenAnswerResponse {
    answer: string;
    user:   string;
    uuid:   string;
}
