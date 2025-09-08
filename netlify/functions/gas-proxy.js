const GAS_URL = process.env.GAS_URL || "https://script.google.com/macros/s/AKfycbxWk0l3SKqvIqxUlwmahj1gvRetMxBirfGCCCraEtGbnzE5fkmxYn92V1N1aqVZOLYh4w/exec";

exports.handler = async (event) => {
  const origin = event.headers.origin || "";
  const allowedOrigins = [
    "http://localhost:8888",
    "http://localhost:5173",
    "https://saadsiteportfolio.netlify.app",
  ];
  const corsOrigin = allowedOrigins.includes(origin) ? origin : "https://saadsiteportfolio.netlify.app";

  const corsHeaders = {
    "Access-Control-Allow-Origin": corsOrigin,
    "Access-Control-Allow-Methods": "POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: corsHeaders, body: "Method Not Allowed" };
  }

  try {
    const upstream = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": event.headers["content-type"] || "application/json" },
      body: event.body,
    });

    const text = await upstream.text();
    const contentType = upstream.headers.get("content-type") || "text/plain";

    return {
      statusCode: upstream.status,
      headers: { ...corsHeaders, "Content-Type": contentType },
      body: text,
    };
  } catch (err) {
    return {
      statusCode: 502,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Upstream fetch failed" }),
    };
  }
};

