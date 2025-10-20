import { useContext, useEffect, useState } from "react";
import BookingCard from "./BookingCard";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyBookings = () => {
  const { user, loading } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  // Show DaisyUI spinner while auth/loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <button className="btn btn-square loading"></button>
      </div>
    );
  }

  useEffect(() => {
    if (!user?.email) return;
    fetch(`https://assignment11-server-side-nine.vercel.app/bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user?.email]);

  const handleCancelBooking = (bookingId) => {
    fetch(`https://assignment11-server-side-nine.vercel.app/bookings/cancel/${bookingId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Booking canceled successfully") {
          setBookings((prevBookings) =>
            prevBookings.filter((booking) => booking._id !== bookingId)
          );
        }
      })
      .catch((error) => console.error("Error canceling booking:", error));
  };

  const handleUpdateDate = (bookingId, newEndDate) => {
    fetch(`https://assignment11-server-side-nine.vercel.app/bookings/update-end-date/${bookingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ endDate: newEndDate.toISOString() }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Booking updated successfully") {
          setBookings((prevBookings) =>
            prevBookings.map((booking) =>
              booking._id === bookingId
                ? { ...booking, endDate: newEndDate.toISOString() }
                : booking
            )
          );
        }
      })
      .catch((error) => console.error("Error updating booking date:", error));
  };

  const formatDate = (date) => {
    const parsedDate = new Date(date);
    return isNaN(parsedDate) ? "" : parsedDate.toLocaleDateString("en-GB");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {bookings.length === 0 ? (
        <div className="max-w-2xl mx-auto text-center mt-20">
          <h1 className="font-bold mt-2 text-2xl sm:text-3xl">
            No Booking History
          </h1>
        </div>
      ) : (
        <>
          <h1 className="font-bold mt-6 text-2xl sm:text-3xl">
            My Bookings: {bookings.length}
          </h1>
        </>
      )}

      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {bookings.map((booking) => (
          <BookingCard
            key={booking._id}
            booking={{
              ...booking,
              startDate: formatDate(booking.startDate),
              endDate: formatDate(booking.endDate),
            }}
            onCancel={handleCancelBooking}
            onUpdateDate={handleUpdateDate}
          />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
