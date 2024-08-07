// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export const enum Approaches {
    RetrieveThenRead = "rtr",
    ReadRetrieveRead = "rrr",
    ReadDecomposeAsk = "rda"
}

export type AskRequestOverrides = {
    semanticRanker?: boolean;
    semanticCaptions?: boolean;
    excludeCategory?: string;
    top?: number;
    temperature?: number;
    promptTemplate?: string;
    promptTemplatePrefix?: string;
    promptTemplateSuffix?: string;
    suggestFollowupQuestions?: boolean;
    userPersona?: string;
    systemPersona?: string;
    aiPersona?: string;
    responseLength?: number;
    responseTemp?: number;
    selectedFolders?: string;
    selectedTags?: string;
};

export type AskRequest = {
    question: string;
    approach: Approaches;
    overrides?: AskRequestOverrides;
    input_audio_path: string;
};

export type AskResponse = {
    answer: string;
    thoughts: string | null;
    data_points: string[];
    // citation_lookup: {}
    // added this for citation bug. aparmar.
    citation_lookup: { [key: string]: { citation: string; source_path: string; page_number: string } };
    
    error?: string;
};

export type ChatTurn = {
    user: string;
    bot?: string;
};

export type ChatRequest = {
    history: ChatTurn[];
    approach: Approaches;
    overrides?: AskRequestOverrides;
    input_audio_path: "" ;
};

export type BlobClientUrlResponse = {
    url: string;
    error?: string;
};

export type FileUploadBasicStatus = {
    id: string;
    file_path: string;
    file_name: string;
    state: string;
    start_timestamp: string;
    state_description: string;
    state_timestamp: string;
}

export type AllFilesUploadStatus = {
    statuses: FileUploadBasicStatus[];
}

export type GetUploadStatusRequest = {
    timeframe: number;
    state: FileState
}


// These keys need to match case with the defined Enum in the 
// shared code (functions/shared_code/status_log.py)
export const enum FileState {
    All = "ALL",
    Processing = "PROCESSING",
    Skipped = "SKIPPED",
    Queued = "QUEUED",
    Complete = "COMPLETE",
    Error = "ERROR"
}


export type GetInfoResponse = {
    AZURE_OPENAI_SERVICE: string;
    AZURE_OPENAI_CHATGPT_DEPLOYMENT: string;
    AZURE_OPENAI_MODEL_NAME: string;
    AZURE_OPENAI_MODEL_VERSION: string;
    AZURE_SEARCH_SERVICE: string;
    AZURE_SEARCH_INDEX: string;
    TARGET_LANGUAGE: string;
    USE_AZURE_OPENAI_EMBEDDINGS: boolean;
    EMBEDDINGS_DEPLOYMENT: string;
    EMBEDDINGS_MODEL_NAME: string;
    EMBEDDINGS_MODEL_VERSION: string;
    error?: string;
};

export type ActiveCitation = {
    file_name: string;
    file_uri: string;
    processed_datetime: string;
    title: string;
    section: string;
    pages: number[];
    token_count: number;
    content: string;
    error?: string;
}

export type GetWarningBanner = {
    WARNING_BANNER_TEXT: string;
    error?: string;
};

// These keys need to match case with the defined Enum in the 
// shared code (functions/shared_code/status_log.py)
export const enum StatusLogClassification {
    Debug = "Debug",
    Info = "Info",
    Error = "Error"
}

// These keys need to match case with the defined Enum in the 
// shared code (functions/shared_code/status_log.py)
export const enum StatusLogState {
    Processing = "Processing",
    Skipped = "Skipped",
    Queued = "Queued",
    Complete = "Complete",
    Error = "Error",
    Throttled = "Throttled",
    Uploaded = "Uploaded",
    All = "All"
}

export type StatusLogEntry = {
    path: string;
    status: string;
    status_classification: StatusLogClassification;
    state: StatusLogState;
}

export type StatusLogResponse = {
    status: number;
    error?: string;
}

export type ApplicationTitle = {
    APPLICATION_TITLE: string;
    error?: string;
};

export type GetTagsResponse = {
    tags: string;
    error?: string;
}