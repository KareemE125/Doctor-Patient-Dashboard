export default interface DiagnosisHistory {
    month: string;
    year: number;
    blood_pressure: BloodPressure;
    heart_rate: {
        value: number;
        levels: string;
    };
    respiratory_rate: {
        value: number;
        levels: string;
    };
    temperature: {
        value: number;
        levels: string;
    };
}

export interface BloodPressure {
    systolic: {
        value: number;
        levels: string;
    };
    diastolic: {
        value: number;
        levels: string;
    };
}