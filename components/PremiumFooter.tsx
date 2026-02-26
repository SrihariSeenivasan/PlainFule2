import MagneticButton from "./MagneticButton";

export default function PremiumFooter() {
  return (
    <footer className="section-padding bg-[var(--charcoal)] text-[#f6f2eb]">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#ccc0b0]">Plainfuel</p>
          <h3 className="mt-5 max-w-sm text-3xl font-semibold leading-tight">
            Food clarity for everyday Indian households.
          </h3>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[#ccc0b0]">Newsletter</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.03)] px-5 py-3 text-sm outline-none placeholder:text-[#c8b8a6] focus:border-[rgba(255,255,255,0.36)]"
            />
            <MagneticButton variant="light">
              Join
            </MagneticButton>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm">
          <div className="space-y-3">
            <p className="uppercase tracking-[0.14em] text-[#cdbba8]">Shop</p>
            <p>All Products</p>
            <p>Ingredients</p>
            <p>Pricing</p>
          </div>
          <div className="space-y-3">
            <p className="uppercase tracking-[0.14em] text-[#cdbba8]">Company</p>
            <p>Our Story</p>
            <p>Journal</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
