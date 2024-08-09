const getAvatarUrl = (email: string) => {
    const emailHash = btoa(email).replace(/=+$/, ''); // Base64 encode email and remove padding
    return `https://api.dicebear.com/9.x/bottts/svg?seed=${emailHash}&r=50&size=80`;
  };

export default getAvatarUrl;