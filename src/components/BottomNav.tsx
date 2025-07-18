
import { Home, ShoppingCart, MessageCircle, Search, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BottomNavProps {
  cartCount: number;
  wishlistCount?: number;
  onHomeClick: () => void;
  onSearchClick: () => void;
  onCartClick: () => void;
  onContactClick: () => void;
  onWishlistClick: () => void;
  activeTab?: string;
}

const BottomNav = ({ 
  cartCount, 
  wishlistCount = 0,
  onHomeClick, 
  onSearchClick, 
  onCartClick, 
  onContactClick,
  onWishlistClick,
  activeTab = "home"
}: BottomNavProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-40">
      <div className="flex items-center justify-around max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
        <Button 
          variant="ghost" 
          className={`flex flex-col items-center gap-1 h-auto py-2 ${
            activeTab === "home" ? "text-black" : "text-gray-500"
          }`}
          onClick={onHomeClick}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs">Home</span>
        </Button>
        
        <Button 
          variant="ghost" 
          className={`flex flex-col items-center gap-1 h-auto py-2 ${
            activeTab === "search" ? "text-black" : "text-gray-500"
          }`}
          onClick={onSearchClick}
        >
          <Search className="h-5 w-5" />
          <span className="text-xs">Search</span>
        </Button>
        
        <Button 
          variant="ghost" 
          className={`flex flex-col items-center gap-1 h-auto py-2 relative ${
            activeTab === "cart" ? "text-black" : "text-gray-500"
          }`}
          onClick={onCartClick}
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="text-xs">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Button>
        
        <Button 
          variant="ghost" 
          className={`flex flex-col items-center gap-1 h-auto py-2 relative ${
            activeTab === "wishlist" ? "text-black" : "text-gray-500"
          }`}
          onClick={onWishlistClick}
        >
          <Heart className="h-5 w-5" />
          <span className="text-xs">Wishlist</span>
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </Button>
        
        <Button 
          variant="ghost" 
          className={`flex flex-col items-center gap-1 h-auto py-2 ${
            activeTab === "contact" ? "text-black" : "text-gray-500"
          }`}
          onClick={onContactClick}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs">Contact</span>
        </Button>
      </div>
    </div>
  );
};

export default BottomNav;
