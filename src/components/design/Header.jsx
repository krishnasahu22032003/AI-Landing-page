// HamburgerMenu.jsx

export const Rings = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="relative w-[52rem] aspect-square">
      {[1, 0.7, 0.45].map((scale, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-n2/10"
          style={{ transform: `scale(${scale})` }}
        />
      ))}
    </div>
  </div>
);

export const SideLines = () => (
  <>
    <div className="absolute top-0 left-5 w-0.5 h-full bg-n6/40" />
    <div className="absolute top-0 right-5 w-0.5 h-full bg-n6/40" />
  </>
);

export const GlowDot = ({ className, from, to, size = "w-3 h-3" }) => (
  <div
    className={`absolute ${size} rounded-full ${className}`}
    style={{
      background: `radial-gradient(circle, ${from} 0%, ${to} 100%)`,
    }}
  />
);

export const BackgroundCircles = () => (
  <>
    <GlowDot className="top-[5rem] left-16" from="#AC6AFF" to="transparent" />
    <GlowDot className="top-[13rem] right-20" from="#FFC876" to="transparent" />
    <GlowDot className="top-[27rem] left-12 w-5 h-5" from="#7ADB78" to="transparent" />
  </>
);

export const HamburgerMenu = () => (
  <div className="absolute inset-0 pointer-events-none lg:hidden z-[-1]">
    <Rings />
    <SideLines />
    <BackgroundCircles />
  </div>
);
