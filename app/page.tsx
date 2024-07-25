import { CartDrawer } from "@/components/Cart"
import { ProductCatalog } from "@/components/Catalog"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

const HomePage = () =>
{
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
          <ProductCatalog />
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
export default HomePage