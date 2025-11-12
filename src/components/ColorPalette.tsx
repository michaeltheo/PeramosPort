export const ColorPalette = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-foreground">
        Port/Sea Theme Color Palette
      </h1>

      {/* Primary Colors */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Primary Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Primary Navy</p>
            <p className="text-xs text-muted-foreground">#1e3c72</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-accent rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Medium Blue</p>
            <p className="text-xs text-muted-foreground">#2a5298</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-foreground rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Text Dark</p>
            <p className="text-xs text-muted-foreground">#333333</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-secondary rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Light Gray</p>
            <p className="text-xs text-muted-foreground">Secondary</p>
          </div>
        </div>
      </div>

      {/* Maritime Colors */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Maritime Theme</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-maritime-deep rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Deep Sea</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-maritime-ocean rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Ocean Blue</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-maritime-sky rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Sky Blue</p>
          </div>
        </div>
      </div>

      {/* Gradients */}
      <div className="space-y-4" data-aos="fade-up">
        <h2 className="text-xl font-semibold">Gradients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center">
            <div className="w-full h-20 gradient-primary rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Primary Gradient</p>
          </div>
          <div className="text-center">
            <div className="w-full h-20 gradient-accent rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Accent Gradient</p>
          </div>
          <div className="text-center">
            <div className="w-full h-20 gradient-hero rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Hero Gradient</p>
          </div>
          <div className="text-center">
            <div className="w-full h-20 gradient-ocean rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Ocean Gradient</p>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Usage Examples</h2>
        <div className="space-y-4">
          <div className="p-6 bg-card border rounded-lg">
            <h3 className="text-primary text-xl font-semibold mb-2">
              Port Services
            </h3>
            <p className="text-foreground mb-4">
              Welcome to Nea Peramos Port - your gateway to maritime excellence.
            </p>
            <button className="btn-primary mr-4">Primary Action</button>
            <button className="btn-secondary">Secondary Action</button>
          </div>

          <div className="p-6 gradient-hero text-white rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Hero Section</h3>
            <p className="opacity-90">
              Experience world-class port facilities with our navy blue theme.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
