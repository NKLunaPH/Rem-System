import { Routes } from '@angular/router';

// Dashboard
import { Dashboard } from './dashboard/dashboard';

// Properties
import { PropertyList } from './properties/property-list/property-list';
import { PropertyForm } from './properties/property-form/property-form';
import { PropertyDetails } from './properties/property-details/property-details';

// Buyers
import { BuyerList } from './buyers/buyer-list/buyer-list';
import { BuyerForm } from './buyers/buyer-form/buyer-form';
import { BuyerProfile } from './buyers/buyer-profile/buyer-profile';
import { BuyerHistory } from './buyers/buyer-history/buyer-history';

// Sellers
import { SellerList } from './sellers/seller-list/seller-list';
import { SellerForm } from './sellers/seller-form/seller-form';
import { SellerProfile } from './sellers/seller-profile/seller-profile';

// Agents
import { AgentList } from './agents/agent-list/agent-list';
import { AgentForm } from './agents/agent-form/agent-form';
import { AgentProfile } from './agents/agent-profile/agent-profile';

// Appointments
import { AppointmentList } from './appointments/appointment-list/appointment-list';
import { AppointmentForm } from './appointments/appointment-form/appointment-form';
import { AppointmentCalendar } from './appointments/appointment-calendar/appointment-calendar';

// Transactions
import { TransactionList } from './transaction/transaction-list/transaction-list';
import { PaymentForm } from './transaction/payment-form/payment-form';
import { Receipt } from './transaction/receipt/receipt';

// Reports
import { SalesReport } from './reports/sales-report/sales-report';
import { RevenueReport } from './reports/revenue-report/revenue-report';

// Notifications
import { Notifications } from './notifications/notifications';

// Settings
import { Settings } from './settings/settings';

// Register
import { Register } from './register/register';

// Auth
import { Login } from './login/login';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  
  { path: 'properties', component: PropertyList },
  { path: 'properties/new', component: PropertyForm },
  { path: 'properties/:id', component: PropertyDetails },
  
  { path: 'buyers', component: BuyerList },
  { path: 'buyers/new', component: BuyerForm },
  { path: 'buyers/:id', component: BuyerProfile },
  { path: 'buyers/:id/history', component: BuyerHistory },
  
  { path: 'agents', component: AgentList },
  { path: 'agents/new', component: AgentForm },
  { path: 'agents/:id', component: AgentProfile },

  { path: 'appointments', component: AppointmentList },
  { path: 'appointments/new', component: AppointmentForm },
  { path: 'appointments/calendar', component: AppointmentCalendar },

  { path: 'transactions', component: TransactionList },
  { path: 'transactions/payment', component: PaymentForm },
  { path: 'transactions/receipt', component: Receipt },

  { path: 'reports/sales', component: SalesReport },
  { path: 'reports/revenue', component: RevenueReport },

  { path: 'notifications', component: Notifications },
  { path: 'settings', component: Settings },

  { path: 'sellers', component: SellerList },
  { path: 'sellers/new', component: SellerForm },
  { path: 'sellers/:id', component: SellerProfile }
];
