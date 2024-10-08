import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="mission" className="w-fit">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="mission">Our Mission</TabsTrigger>
        <TabsTrigger value="team">Our Team</TabsTrigger>
        <TabsTrigger value="value">Our Value</TabsTrigger>
      </TabsList>
      <TabsContent value="mission">
        <Card>
          <CardContent className="space-y-2 pt-4">
            At Raven Scope Investigations, our mission is straightforward: to
            deliver the utmost expertise and service to insurers, policyholders,
            and third-party administrators in the realm of insurance claim
            investigation and verification.
            <br />
            <br />
            We are committed to empowering our clients with the information they
            need to make informed decisions, mitigate fraud risk, and facilitate
            fair and efficient claims processing.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="team">
        <Card>
          <CardContent className="space-y-2 pt-4">
            Every successful investigation and verification is supported by a
            dedicated team of experts who are passionate about their work. Our
            team is made up of highly skilled professionals with extensive
            knowledge of the insurance industry, all committed to achieving
            outstanding results. We pride ourselves on having a large team that
            is well-equipped to handle various challenges efficiently.
            <br />
            <br />
            Our professionals excel at engaging with clients in a professional
            manner, ensuring a seamless experience throughout the process.
            Additionally, we have established contacts in hospitals, enabling us
            to obtain vital information swiftly and effectively.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="value">
        <Card>
          <CardContent className="space-y-2 pt-4">
            <div className="">
              <p className="mb-6">
                At Raven Scope Investigations, our values are fundamental to our
                operations and influence every decision we make:
              </p>

              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Integrity:</strong> We approach our investigations
                  with complete integrity and honesty, ensuring that every party
                  involved in a claim is treated fairly and ethically.
                </li>
                <li>
                  <strong>Accuracy:</strong> We emphasize precision in all our
                  work, from evidence collection to report generation, providing
                  our clients with trustworthy and reliable information.
                </li>
                <li>
                  <strong>Client-Centric Focus:</strong> We believe that our
                  clients' success reflects our own. We are committed to
                  understanding their unique needs and offering customized
                  solutions that go beyond their expectations.
                </li>
                <li>
                  <strong>Confidentiality:</strong> We treat sensitive
                  information with the utmost respect and confidentiality,
                  ensuring the privacy and security of our clients at all times.
                </li>
                <li>
                  <strong>Professionalism:</strong> We uphold a high standard of
                  professionalism in all our interactions, presenting ourselves
                  in a manner that demonstrates our commitment to excellence.
                </li>
                <li>
                  <strong>Innovation:</strong> We leverage the latest technology
                  and methodologies to remain at the forefront of our industry,
                  continuously improving our processes to make investigations
                  more efficient and effective.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
