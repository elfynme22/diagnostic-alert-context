export type Severity = 'critical' | 'warning' | 'info';
export type AlertStatus = 'active' | 'resolved' | 'historical';
export interface DiagnosticAlert {id:string;title:string;code:string;severity:Severity;status:AlertStatus;time:string;resolvedAt?:string;minutes:number;stage:string;description:string;related:string[];}
export interface Sample {time:string;voltage:number;temperature:number;}
export interface DiagnosticData {session:{vehicle:string;started:string;driveStarted:string;ended:string;date:string};alerts:DiagnosticAlert[];signals:Sample[];}
