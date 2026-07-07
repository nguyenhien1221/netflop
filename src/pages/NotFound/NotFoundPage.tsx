import { Link, useNavigate } from "react-router-dom";
import Button from "@/components/common/Button";
import { NAV_PATH } from "@/constants/nav.constants";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center gap-4 px-4 py-24 text-center md:px-6">
      <p className="text-6xl font-bold text-white/20">404</p>
      <h1 className="text-2xl font-semibold text-white">Page not found</h1>
      <p className="max-w-md text-sm text-white/60">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-3">
        <Button asChild variant="primary" size="md">
          <Link to={NAV_PATH.HOME}>Back to home</Link>
        </Button>
        <Button variant="secondary" size="md" onClick={() => navigate(-1)}>
          Go back
        </Button>
      </div>
    </main>
  );
};

export default NotFoundPage;
