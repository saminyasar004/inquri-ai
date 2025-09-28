import AuthLayout from "@/components/common/auth-layout";
import { SuccessModal } from "@/components/common/success-modal";

export default function AccountCreated() {
	return (
		<AuthLayout>
			<div className="h-full flex items-center justify-center">
				<SuccessModal
					title="Account has been created Successfully"
					message=""
					buttonText="Back To login"
					buttonHref="/login"
				/>
			</div>
		</AuthLayout>
	);
}
