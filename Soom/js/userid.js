export function generateUserId() {
    let userId = sessionStorage.getItem('userId');

    if (!userId) {
        userId = `user_${Date.now()}_${Math.random()}`;
        sessionStorage.setItem('userId', userId);
    }

    return userId;
}