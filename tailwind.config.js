module.exports = {
  daisyui: {
    themes: ["winter"],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'form-bg': "url('https://www.dwtoolshop.com/media/catalog/product/e/s/estwing_e324s_24oz_straight_claw_framing_hammer_-_vinyl_grip.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560')",

      }

    },
  },
  plugins: [require("daisyui")],

}