export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return Response.json({
        status: "ok",
        application: "Przedszkolny Organizer",
        database: Boolean(env.DB)
      });
    }

    if (url.pathname.startsWith("/api/")) {
      return Response.json(
        { error: "Nieznany endpoint API" },
        { status: 404 }
      );
    }

    return env.ASSETS.fetch(request);
  }
};
