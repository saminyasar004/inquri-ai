// import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import NotFound from "./pages/NotFound";
import Layout from "./components/common/layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ActivationCode from "./pages/ActivationCode";
import AccountCreated from "./pages/AccountCreated";
import ConfirmEmail from "./pages/ConfirmEmail";
import ChangePassword from "./pages/ChangePassword";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/Privacy";
import Pricing from "./pages/Pricing";
import DashboardLayout from "./components/common/dashboard-layout";
import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			{/* <Toaster /> */}
			<Sonner />
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<Layout>
								<Index />
							</Layout>
						}
					/>
					<Route path="/login" element={<Login />} />

					<Route path="/signup" element={<Signup />} />
					<Route path="/created" element={<AccountCreated />} />
					<Route path="/activate" element={<ActivationCode />} />
					<Route path="/confirm" element={<ConfirmEmail />} />
					<Route
						path="/contact"
						element={
							<Layout>
								<Contact />
							</Layout>
						}
					/>
					<Route
						path="/privacy"
						element={
							<Layout>
								<PrivacyPolicy />
							</Layout>
						}
					/>
					<Route
						path="/pricing"
						element={
							<Layout>
								<Pricing />
							</Layout>
						}
					/>
					<Route
						path="/dashboard"
						element={
							<DashboardLayout>
								<Dashboard />
							</DashboardLayout>
						}
					/>
					<Route
						path="/schedule"
						element={
							<DashboardLayout>
								<Schedule />
							</DashboardLayout>
						}
					/>
					<Route
						path="/change-password"
						element={<ChangePassword />}
					/>
					{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
