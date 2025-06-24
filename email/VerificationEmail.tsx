import {
    Html,
    Head,
    // Font,
    Preview, 
    Heading, 
    Row,
    Section,
    Text,
    // Button,
} from "@react-email/components";

interface varificationEmailprops{
    username: string;
    otp: string;
}


export default function varificationEmail({username, otp}:varificationEmailprops){
    return(
        <Html lang="en" dir='ltr'>
        <Head>
            <title>Varification Code</title>
        </Head>
     
        <Preview>Hear&apos;s your varification Code: {otp} </Preview>
         <Section>
            <Row>
                <Heading>Hello {username}</Heading>
            </Row>
            <Row>
                <Text>
                    Thanks you for registering. Please use the following varification code to comlpete your registration
                </Text>
            </Row>
            <Row>{otp}</Row>
            <Row>
                <Text>
                    If you did not request this code, please ignore this email
                </Text></Row>
         </Section>

        </Html>
    );
}