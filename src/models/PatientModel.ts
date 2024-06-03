import DiagnosisHistory from "@models/DiagnosisHistoryModel";
import Diagnostic from "@models/DiagnosticModel";

// here we got no id so we will use the name as the id
export default interface Patient {
    name: string;
    gender: string;
    age: number;
    profile_picture: string;
    date_of_birth: string;
    phone_number: string;
    emergency_contact: string;
    insurance_type: string;
    diagnosis_history: DiagnosisHistory[];
    diagnostic_list: Diagnostic[];
    lab_results: string[];
}