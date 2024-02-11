// reviews.js

function submitReview() {
    // Obtener el texto de la reseña desde el formulario
    var reviewText = document.getElementById('reviewText').value;

    // Crear un nuevo elemento de reseña
    var newReview = document.createElement('div');
    newReview.className = 'user-review';
    newReview.innerHTML = '<p>' + reviewText + '</p>';

    // Agregar la reseña a la lista de reseñas
    var reviewsList = document.getElementById('reviewsList');
    reviewsList.appendChild(newReview);

    // Limpiar el formulario después de publicar la reseña
    document.getElementById('reviewText').value = '';
}
