export function ValidateCreate(imputs) {
  const errors = {};

  if (!imputs.name || imputs.name.length > 15) {
    errors.name = "A name between 1 and 15 digits is required";
  }
  if (!imputs.rating_top) {
    errors.rating_top = "Rating must not be empty";
  } else if (imputs.rating_top.length < 1 || imputs.rating_top.length > 5) {
    errors.rating_top = "Must be a number between 1 and 5";
  }
  if (!imputs.playtime) {
    errors.playtime = "Average playtime must not be empty";
  }
  if (!imputs.esrb_rating) {
    errors.esrb_rating = "ESRB rating must not be empty";
  }
  if (!imputs.genres) {
    errors.genres = "Genres must not be empty";
  }
  if (!imputs.background_image) {
    errors.background_image = "Image must not be empty";
  }
  return errors;
}
