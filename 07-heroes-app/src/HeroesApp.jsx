import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
  return (
    <AuthProvider> {/* engrapo el AppRouter con el provider para proveer info a toda nuestra app */}
        <AppRouter/>
    </AuthProvider>
  )
}
