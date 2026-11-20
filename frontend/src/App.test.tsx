import { render,screen,fireEvent } from '@testing-library/react';
import { describe,it,expect,vi } from 'vitest';
import App from './App';
import { demo, sortAlerts } from './data/demo';
vi.stubGlobal('fetch',vi.fn().mockRejectedValue(new Error('offline demo')));
describe('Service Mode UI concept V2',()=>{
 it('sorts active critical ahead of other alerts',()=>{expect(sortAlerts(demo.alerts).map(a=>a.id)).toEqual(['performance','communication','voltage','temperature'])});
 it('preserves resolved critical severity and green resolved mark',()=>{render(<App/>);fireEvent.click(screen.getByRole('button',{name:/Low Battery Voltage/i}));expect(screen.getAllByLabelText('Resolved').length).toBeGreaterThan(0);expect(screen.getAllByText('Critical').length).toBeGreaterThan(0)});
 it('navigates to investigation and back',()=>{render(<App/>);fireEvent.click(screen.getByRole('button',{name:/Open investigation view/i}));expect(screen.getByText('Signal History')).toBeInTheDocument();fireEvent.click(screen.getByRole('button',{name:/Back to alerts/i}));expect(screen.getByText('Active & Recent Alerts')).toBeInTheDocument()});
 it('marks an active alert as resolved without removing it',()=>{render(<App/>);fireEvent.click(screen.getByRole('button',{name:/Mark as resolved/i}));expect(screen.getByText(/Resolved 10:24/)).toBeInTheDocument();expect(screen.getAllByText('System Performance Reduced').length).toBeGreaterThan(0)});
});
