class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:
        s = set()
        for email in emails:
            e = email.split("@")
            local = e[0].split("+")[0]
            domain = e[1]
            if "." in local:
                local = "".join([i for i in local if i != "."])
            s.add(local+"@"+domain)
        return len(s)