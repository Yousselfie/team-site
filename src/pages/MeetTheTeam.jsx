import Profile from "../components/Profile"

export default function MeetTheTeam(){
    return (
        <>
            <Profile 
                image_path="/brandon.jpg"
                name="Issa Alvarez"
                color="blue"
                description="Lorem ipsum hocus pocus one two three four."
            />
            <Profile 
                image_path="/tyzel.jpg"
                is_reverse
                name="Tyzel Curry"
                color="red"
                description="Lorem ipsum hocus pocus one two three four."
            />
            <Profile 
                image_path="/mohammed.jpg"
                name="Mohammed Abdel-Kareem"
                color="green"
                description="Lorem ipsum hocus pocus one two three four."
            />
            <Profile 
                image_path="/youssef.jpg"
                is_reverse
                name="Youssef Bahloul"
                color="yellow"
                description="Lorem ipsum hocus pocus one two three four."
            />
        </>
    );
}