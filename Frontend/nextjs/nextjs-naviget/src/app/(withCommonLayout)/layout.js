import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const CommentLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default CommentLayout;
