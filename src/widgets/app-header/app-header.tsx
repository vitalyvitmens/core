import { ToggleTheme } from "@/src/features/theme/toggle-theme";
import { Layout } from "./_ui/layout";
import { Logo } from "./_ui/logo";
import { MainNav } from "./_ui/main-nav";
import { Profile } from "./_ui/profile";

export function AppHeader({
  variant,
}: {
  variant: "auth" | "public" | "private";
}) {
  const isProfile = variant !== "auth";

  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav />}
      profile={isProfile && <Profile />}
      actions={<ToggleTheme />}
    />
  );
}
