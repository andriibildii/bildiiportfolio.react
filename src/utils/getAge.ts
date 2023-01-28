export default function getAge(dateString: string): number {
    let date = dateString;
    const initial = date.split('/');

    if (initial[0] <= '12') {
        date = dateString;
    } else if (initial[0] > '12') {
        date = [initial[1], initial[0], initial[2]].join('/');
    }

    const today = new Date();
    const birthDate = new Date(date);

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}
