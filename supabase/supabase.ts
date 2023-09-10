import { createClient } from "@supabase/supabase-js";

const options = {
    db: {
        schema: "public",
    },
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
    },
    global: {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IlZRNExISisxRS9iQ1BoTHUiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjk0MzcxMjU4LCJpYXQiOjE2OTQzNjc2NTgsImlzcyI6Imh0dHBzOi8vd2tlaHdzc2x6bHZsY2xla2lmcXIuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6ImM3NzMyMDUwLTIzN2QtNDFlMC04NWZjLWMyZmRjOWI5ZjBkYyIsImVtYWlsIjoiemljazMzMzNAbWFpbC5ydSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNjk0MzY3NjU4fV0sInNlc3Npb25faWQiOiIyMmUwOTJhOC1lZjU3LTQyNDYtYjBmOS1mZDE3MDE2NmFmMmIifQ.Ll_obXv0bP43ugfImX93wPVfweDW2ItNkntLP4sf1Ts`,
        },
    },
};

const supabase = createClient(process.env.SUPABASE_URL as string, process.env.SUPABASE_KEY as string, options);

export default supabase;
