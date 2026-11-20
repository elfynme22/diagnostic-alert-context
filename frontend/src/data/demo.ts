import type { DiagnosticData,DiagnosticAlert } from '../types';
export const demo: DiagnosticData = {
 session:{vehicle:'DEMO VEHICLE 01',started:'09:58',driveStarted:'10:01',ended:'10:24',date:'2026-11-20'},
 alerts:[
 {id:'performance',title:'System Performance Reduced',code:'DEMO-P003',severity:'critical',status:'active',time:'10:15',minutes:17,stage:'During drive',description:'A performance restriction was recorded. Review preceding events and signal trends.',related:['voltage','communication']},
 {id:'voltage',title:'Low Battery Voltage',code:'DEMO-P001',severity:'critical',status:'resolved',time:'10:04',resolvedAt:'10:21',minutes:6,stage:'Early drive',description:'Voltage fell below the illustrative threshold. Resolved, but retained in history.',related:['communication','performance']},
 {id:'communication',title:'Sensor Communication Lost',code:'DEMO-P002',severity:'warning',status:'active',time:'10:09',minutes:11,stage:'During drive',description:'A communication interruption was recorded after the voltage decline.',related:['voltage','performance']},
 {id:'temperature',title:'Temperature Increasing',code:'DEMO-P004',severity:'info',status:'historical',time:'10:12',minutes:14,stage:'During drive',description:'An informational temperature trend was recorded.',related:[]}
 ],
 signals:[{time:'09:58',voltage:12.5,temperature:42},{time:'10:01',voltage:12.3,temperature:45},{time:'10:04',voltage:10.8,temperature:48},{time:'10:09',voltage:10.9,temperature:53},{time:'10:12',voltage:11.2,temperature:60},{time:'10:15',voltage:11.0,temperature:62},{time:'10:21',voltage:12.4,temperature:55},{time:'10:24',voltage:12.5,temperature:50}]
};
const rankStatus = (a: DiagnosticAlert) => a.status === 'active' ? 0 : a.status === 'resolved' ? 1 : 2;
const rankSeverity = (a: DiagnosticAlert) => ({critical:0, warning:1, info:2})[a.severity];
// A resolved critical alert stays red historically, but no longer outranks an active warning.
export function sortAlerts(alerts: DiagnosticAlert[]): DiagnosticAlert[] {return [...alerts].sort((a,b)=>rankStatus(a)-rankStatus(b) || rankSeverity(a)-rankSeverity(b) || b.minutes-a.minutes);}
export function relatedAlerts(alert: DiagnosticAlert, alerts:DiagnosticAlert[]) {return alert.related.map(id=>alerts.find(a=>a.id===id)).filter((a):a is DiagnosticAlert=>Boolean(a));}
