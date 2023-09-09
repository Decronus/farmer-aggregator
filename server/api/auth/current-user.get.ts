import supabase from "@/supabase/supabase";
import { createErrorHandler } from "../../../utils/functions";

export default defineEventHandler(async (event) => {
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser(
        "eyJhbGciOiJIUzI1NiIsImtpZCI6IlZRNExISisxRS9iQ1BoTHUiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjk0Mjk3MTU1LCJpYXQiOjE2OTQyOTM1NTUsImlzcyI6Imh0dHBzOi8vd2tlaHdzc2x6bHZsY2xla2lmcXIuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6ImM3NzMyMDUwLTIzN2QtNDFlMC04NWZjLWMyZmRjOWI5ZjBkYyIsImVtYWlsIjoiemljazMzMzNAbWFpbC5ydSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNjk0MjkzNTU1fV0sInNlc3Npb25faWQiOiIzMWEzNWQ5NS0wMzc1LTQ3ZmEtYmZjOC0zMjU2YTY4Zjg3NzIifQ.m0DCgFOSoRTuB3XyeNsiV4LQ-BXJpKKqTrNo9YvfdV4"
    );
    if (error) createErrorHandler(error.status as number, error.message);
    return user;
});
