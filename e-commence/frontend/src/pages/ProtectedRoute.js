import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "./../contexts/AuthContext";

function ProtectedRoute({ children, admin, ...rest }) {
	const { loggedIn, user } = useAuth();

	if (admin && user?.role !== "admin") {
		return <Navigate to="/" />;
	} else {
		return loggedIn ? children : <Navigate to="/signin" />;
	}
}

export default ProtectedRoute;