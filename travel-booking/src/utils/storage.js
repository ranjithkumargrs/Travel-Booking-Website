const BOOKINGS_KEY = 'wanderly-bookings'

export function getBookings() {
  const saved = window.localStorage.getItem(BOOKINGS_KEY)
  if (!saved) return []

  const bookings = JSON.parse(saved)
  if (!Array.isArray(bookings)) {
    throw new Error('Saved bookings are not in the expected format.')
  }
  return bookings
}

export function saveBooking(booking) {
  const bookings = getBookings()
  const updatedBookings = [booking, ...bookings]
  window.localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updatedBookings))
  return updatedBookings
}

export function removeBooking(bookingId) {
  const bookings = getBookings().filter((booking) => booking.bookingId !== bookingId)
  window.localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings))
  return bookings
}
